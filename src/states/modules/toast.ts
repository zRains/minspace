const closeHandles: Array<() => void> = []

export default function useToastStates() {
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
    states: {},
    mutations: { addCloseHandle, closeAllToast },
    actions: {}
  }
}
