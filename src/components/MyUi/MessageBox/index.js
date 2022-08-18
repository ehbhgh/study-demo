import _MessageBox from "./MessageBox.vue"


export default {
    install(Vue) {

        let messgeBox = null
        Vue.component(_MessageBox.name, _MessageBox)
        Vue.prototype.$messageBox = {
            showMessageBox,
            hideMessageBox,
            success,
            danger,
            warn,
            info
        }

        function showMessageBox(props, callBack) {
            if (!messgeBox) {
                const MessageBox = Vue.extend({
                    render(h) {
                        return h('message-box', {
                            props
                        })
                    }
                })
                messgeBox = new MessageBox();
                this.vm = messgeBox.$mount();
                document.body.appendChild(this.vm.$el)

                callBack && callBack()
            }


        }


        function hideMessageBox(callBack) {
            document.body.removeChild(this.vm.$el)
            messgeBox.$destroy()
            messgeBox = null
            this.vm = null
            callBack && callBack()
        }

        function info(props, callBack) {
            this.showMessageBox({
                ...props,
                type: 'primary',
                callBack
            })
        }
        function success(props, callBack) {
            this.showMessageBox({
                ...props,
                type: 'success',
                callBack
            })
        }
        function danger(props, callBack) {
            this.showMessageBox({
                ...props,
                type: 'danger',
                callBack
            })
        }
        function warn(props, callBack) {
            this.showMessageBox({
                ...props,
                type: 'warn',
                callBack
            })
        }
    }
}