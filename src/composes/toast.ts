import { render, h } from 'vue'
import MSToast from '../components/ui/toast/MSToast.vue'

interface ToastOption {
  type?: 'success' | 'info' | 'warning' | 'error' | 'loading'
  position?: 'TopLeft' | 'TopCenter' | 'TopRight'
  duration?: number
  fastAdd?: boolean
  pauseOnHover?: boolean
  onClick?: () => void
  onShow?: () => void
  onClosed?: () => void
  closable?: boolean
  title: string
  content?: string
}

export default function useToast() {
  return {
    create(options: ToastOption | string) {
      const finalOptions: ToastOption = typeof options === 'string' ? { title: options } : options
      const toastProvider = document.querySelector('.MSToastProvider')
      const toastContainer = document.createElement('div')
      const vNode = h(MSToast, finalOptions, {})

      if (!toastProvider) return

      toastContainer.classList.add('toastContainer')
      toastProvider.appendChild(toastContainer)
      render(vNode, toastContainer)
    },
    open(message: string) {
      this.create(message)
    },
    success(message: string, options?: Omit<ToastOption, 'type' | 'title'>) {
      return this.create({
        title: message,
        type: 'success',
        ...options
      })
    },
    info(message: string, options?: Omit<ToastOption, 'type' | 'title'>) {
      return this.create({
        title: message,
        type: 'info',
        ...options
      })
    },
    warning(message: string, options?: Omit<ToastOption, 'type' | 'title'>) {
      return this.create({
        title: message,
        type: 'warning',
        ...options
      })
    },
    error(message: string, options?: Omit<ToastOption, 'type' | 'title'>) {
      return this.create({
        title: message,
        type: 'error',
        ...options
      })
    },
    loading(message: string, options?: Omit<ToastOption, 'type' | 'title'>) {
      return this.create({
        title: message,
        type: 'loading',
        ...options
      })
    },
    clear() {}
  }
}