import { StyleSheet } from 'react-native'

export const ITEM_HEIGHT = 72

export const styles = StyleSheet.create({
  checkboxContainer: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  footer: {
    alignItems: 'center',
    height: 100,
    justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    height: ITEM_HEIGHT,
    paddingHorizontal: 20,
  },
  separator: {
    height: 1,
    width: '100%',
  },
  titleContainer: {
    flex: 4,
    justifyContent: 'center',
  },
})
