import { StyleSheet } from 'react-native'

export const ITEM_HEIGHT = 72

export const styles = StyleSheet.create({
  checkboxContainer: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    height: ITEM_HEIGHT,
    paddingHorizontal: 20,
  },
  titleContainer: {
    flex: 4,
    justifyContent: 'center',
  },
})
