const closeHandles: Array<() => void> = []

export default function useToast() {
  // states

  // mutations
  function addCloseHandle(handle: () => void) {
    closeHandles.push(handle)
  }

  function closeAllToast() {
    closeHandles.forEach((h) => h())
    closeHandles.length = 0
  }

  // actions

  return {
    state: {},
    mutations: { addCloseHandle, closeAllToast },
    actions: {}
  }
}
