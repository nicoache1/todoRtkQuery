import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider as PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider as ReduxProvider } from 'react-redux'
import { navigationRef } from 'src/common/navigation'
import { AppContainer } from 'src/navigation'
import { store } from 'src/store'
import { ThemeProvider } from 'src/styles/Theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <ReduxProvider store={store}>
          <NavigationContainer ref={navigationRef}>
            <ThemeProvider>
              <PaperProvider>
                <AppContainer />
              </PaperProvider>
            </ThemeProvider>
          </NavigationContainer>
        </ReduxProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}
