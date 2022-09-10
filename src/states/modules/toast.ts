import { ComponentInternalInstance } from 'vue'

const toastInstance: ComponentInternalInstance[] = []

export default function useToast() {
  // states

  // mutations
  function addToastInstance(instance: ComponentInternalInstance) {
    // let verticalOffset = 0
    // toastInstance.forEach((item) => {
    //   verticalOffset += item.$el.offsetHeight + 16
    // })
    // verticalOffset += 16

    // instance.toastPosition.y = verticalOffset

    toastInstance.push(instance)
  }

  // actions

  return {
    state: {},
    mutations: { addToastInstance },
    actions: {}
  }
}
