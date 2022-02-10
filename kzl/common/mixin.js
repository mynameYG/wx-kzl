export const avatar = {
	methods: {
		chooseAvatar() {
			uni.$on('uAvatarCropper', this.upload);
			this.$u.route({
				// 关于此路径，请见下方"注意事项"
				url: '/uview-ui/components/u-avatar-cropper/u-avatar-cropper',
				// 内部已设置以下默认参数值，可不传这些参数
				params: {
					// 输出图片宽度，高等于宽，单位px
					destWidth: 300,
					// 裁剪框宽度，高等于宽，单位px
					rectWidth: 300,
					// 输出的图片类型，如果'png'类型发现裁剪的图片太大，改成"jpg"即可
					fileType: 'jpg'
				}
			});
		},
		upload: async function(path) {
			uni.$off('uAvatarCropper', this.upload);
			// 可以在此上传到服务端
			try {
				// let res = await this.$api.goUpload(path);
				let res = await this.$ajax({
					url: 'http://mz.kzl.cn/api/common/upload',
					
					header: {
						"content-type": "application/json; charset=utf-8",
						sid: "wangwenqishigezhizhang",
						token: uni.getStorageSync("token")
					}
				});
				if (!res) return;
				this.form.avatar = res.url;
				this.url = res.fullurl;
				if (typeof this.editAvatar == 'function') {
					this.editAvatar();
				}
			} catch (e) {
				console.error(e);
				this.$u.toast('图片上传失败！');
			}
		}
	}
}
const upload = async function(path, params = {}, vm) {

	return new Promise((resolve, reject) => {
		uni.showLoading({
			mask: true,
			title: '上传中'
		});
		console.log(vm.vuex_config.config.upload.uploadurl);
		let data = {
			url: vm.vuex_config.config.upload.uploadurl,
			filePath: path,
			header: {
				token: vm.vuex_token || '',
				uid: vm.vuex_user.id || 0
			},
			name: 'file',
			complete: function() {
				uni.hideLoading();
			},
			success: uploadFileRes => {
				try {
					var res = uploadFileRes.data;
					if (vm.$u.test.jsonString(res)) {
						resolve(JSON.parse(res).data)
					}
					if (vm.$u.test.object(res)) {
						resolve(res.data)
					}
				} catch (e) {
					reject(uploadFileRes.data);
				}
			},
			fail: (e) => {
				reject(e);
			}
		};
		let isObj = vm.$u.test.object(vm.vuex_config.config.upload.multipart);
		if (isObj) {
			data.formData = vm.vuex_config.config.upload.multipart;
		}
		uni.uploadFile(data);
	})

}