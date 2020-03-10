import React, { useEffect } from 'react'
import {
    View,
    TextInput,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import validate from '../store/actions/validateBoardAction'

export default function BoardGameScreen(props) {
    const dispatch = useDispatch()
    const boardsGame = useSelector((state) => state.boardGameReducer.boardsGame.board)

    const update = (row, col, value) => {
        let newBoards = boardsGame.slice();
        newBoards[Number(row)][Number(col)] = Number(value);
        dispatch({ type: 'BOARDS_GAME', payload: { board: newBoards } })
        dispatch(validate({ board: boardsGame }))
    }


    return (
        <View>
            <View style={{ flexDirection: "row", marginTop: 5 }}>
                {
                    props.boardRow.map((boardCol, j) => {
                        return (
                            <View key={j}>
                                {
                                    boardCol ?
                                        <View style={{ width: 24, height: 24, marginLeft: 2, backgroundColor: "red", borderWidth: 2, alignItems: 'center' }}>
                                            <TextInput onChangeText={val => update(props.row, j, val)} keyboardType="numeric" defaultValue={String(boardCol)} style={{ fontSize: 15, marginLeft: 5 }} />
                                        </View>
                                        :
                                        <View style={{ width: 24, height: 24, marginLeft: 2, backgroundColor: "white", borderWidth: 2, alignItems: 'center' }}>
                                            <TextInput onChangeText={val => update(props.row, j, val)} keyboardType="numeric" defaultValue={boardCol === 0 ? "" : ""} style={{ fontSize: 15, marginLeft: 5 }} />
                                        </View>
                                }
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}