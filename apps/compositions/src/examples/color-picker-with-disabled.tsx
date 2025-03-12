"use client"

import { ColorPicker, HStack, Portal, parseColor } from "@chakra-ui/react"

export const ColorPickerWithDisabled = () => {
  return (
    <ColorPicker.Root
      disabled
      defaultValue={parseColor("#eb5e41")}
      maxW="200px"
    >
      <ColorPicker.Label>Color</ColorPicker.Label>
      <ColorPicker.Control>
        <ColorPicker.Input />
        <ColorPicker.Trigger />
      </ColorPicker.Control>
      <Portal>
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            <ColorPicker.Area />
            <HStack>
              <ColorPicker.EyeDropper size="xs" variant="outline" />
              <ColorPicker.Sliders />
            </HStack>
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      </Portal>
    </ColorPicker.Root>
  )
}
