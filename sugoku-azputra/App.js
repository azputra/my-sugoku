import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'

import store from './store'

import RootNavigation from './navigations/RootNavigation'

import {
  StyleSheet,
  StatusBar,
} from 'react-native';

export default function App() {
  // const [boardsGame, setBoard] = useState([])
  // const [boards, setBoardSolved] = useState([])

  // const levelSudoku = (level) => {
  //   axios.get(`https://sugoku.herokuapp.com/board?difficulty=${level}`)
  //     .then(({ data }) => {
  //       setBoard(data.board)
  //     })
  // }

  // const BoardGame = () => {
  //   return (
  //     <View>
  //       <View style={styles.container}>
  //         <View style={{ alignItems: 'center' }}>
  //           <Text style={{ fontSize: 30, fontWeight: 'bold' }}>SUDOKU</Text>
  //         </View>
  //         {
  //           boardsGame.map((boardColum, i) => {
  //             return (
  //               <BoardColumn key={i} boardCol={boardColum} row={i} />
  //             )
  //           })
  //         }
  //         <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 5 }}>
  //           <View style={{ marginTop: 5 }}>
  //             <TouchableOpacity
  //               style={styles.button}
  //               title="Solved"
  //               onPress={() => solvedSudoku({ board: boards })}>
  //               <Text style={{ minWidth: 130, textAlign: 'center' }}> Solved </Text>
  //             </TouchableOpacity>
  //           </View>
  //           <View style={{ marginTop: 5 }}>
  //             <TouchableOpacity
  //               style={styles.button}
  //               title="Validate"
  //               onPress={() => validateSudoku({ board: boards })}>
  //               <View style={{ alignItems: 'center' }}>
  //                 <Text style={{ minWidth: 130 }}> Validate : unsolve</Text>
  //               </View>
  //             </TouchableOpacity>
  //           </View>
  //         </View>


  //         {/* <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 5 }}>
  //           <TouchableOpacity
  //             style={styles.button}
  //             title="Easy"
  //             onPress={() => levelSudoku('easy')}>
  //             <Text> Easy </Text>
  //           </TouchableOpacity>
  //           <TouchableOpacity
  //             style={styles.button}
  //             title="Medium"
  //             onPress={() => levelSudoku('medium')}>
  //             <Text> Medium </Text>
  //           </TouchableOpacity>
  //           <TouchableOpacity
  //             style={styles.button}
  //             title="Hard"
  //             onPress={() => levelSudoku('hard')}>
  //             <Text> Hard </Text>
  //           </TouchableOpacity>
  //           <TouchableOpacity
  //             style={styles.button}
  //             title="Random"
  //             onPress={() => levelSudoku('random')}>
  //             <Text> Random </Text>
  //           </TouchableOpacity>
  //         </View> */}
  //       </View>
  //     </View>
  //   )
  // }

  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <RootNavigation />
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
});
