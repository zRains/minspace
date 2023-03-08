import type { VNode } from 'vue'

export type DropdownItem = {
  type: 'click'
  text: string
  onClick: () => void
  icon?: VNode
}

export type DropdownToggleItem = {
  type: 'toggle'
  text: string
  active: boolean
  onClick: () => void
}

export type DropdownExpandItem = {
  type: 'expand'
  text: string
  items: (DropdownItem | DropdownToggleItem)[]
  icon?: VNode
}

export type DropdownGroupItem = {
  type: 'group'
  label?: string
  items: (DropdownItem | DropdownToggleItem | DropdownExpandItem)[]
}

export type DropdownOptions = (DropdownItem | DropdownGroupItem | DropdownExpandItem | DropdownToggleItem)[]
