import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import getBoard from '../store/actions/getBoardAction'
import solved from '../store/actions/solvedBoardAction'
import validate from '../store/actions/validateBoardAction'
import BoardColumn from '../components/BoardColumn'
import Constants from 'expo-constants';

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

export default function BoardGameScreen(props) {
    const dispatch = useDispatch()
    // const [solvedBoard, setSolvedBoard] = useState([])

    const boardsGame = useSelector((state) => state.boardGameReducer.boardsGame.board);
    const myStatus = useSelector((state) => state.statusGameReducer.status);
    const username = useSelector((state) => state.userReducer.username);

    // useEffect(() => {
    //     setSolvedBoard(boardsGame)
    // }, [setSolvedBoard])

    // console.log(boardsGame);
    // console.log(solvedBoard, "ini boardSolved");
    // timernya di panggil ketika di use effect
    // setgame status di set di effect
    const timer = (detik) => {
        setTimeInterval(
            setInterval(() => {
                const minute = Math.floor(seconds / 60)
                const second = detik % 60
                const timeDisplay = `${String(minute).padStart(2, 0)} : ${String(second).padStart(2, 0)}`
                second--
                setDispayTimer(timeDisplay)
                if (seconds < 0) {
                    clearInterval(setTimeInterval)
                    setGameStatus(false)
                }
            }, 1000)
        )
    }

    return (
        <View>
            <View style={{ marginTop: Constants.statusBarHeight }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>SUDOKU</Text>
                </View>
                {
                    boardsGame ?
                        boardsGame.map((boardRow, i) => {
                            return (
                                <BoardColumn key={i} boardRow={boardRow} row={i} />
                            )
                        })
                        :
                        <Text>Loading</Text>
                }
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 5 }}>
                    <View style={{ marginTop: 5 }}>
                        <TouchableOpacity
                            style={styles.button}
                            title="Solved"
                            onPress={() => dispatch(solved({ board: boardsGame }))}>
                            <Text style={{ minWidth: 130, textAlign: 'center' }}> Solved </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 5 }}>
                        <TouchableOpacity
                            style={styles.button}
                            title="Validate"
                            onPress={() => props.navigation.navigate('FinishGameScreen')}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ minWidth: 130, textAlign: 'center' }}> Validate </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text>{myStatus}</Text>
                <Text>{username}</Text>
                <Text>{props.route.params.level}</Text>
            </View>
        </View>
    )
}