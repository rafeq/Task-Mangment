import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHanler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')}/>
                <TextInput
                    style={styles.TextInput}
                    placeholder="your goal!"
                    onChangeText={goalInputHanler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add goal' onPress={addGoalHandler} color="#b180f0" />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel!' onPress={props.onCancel} color="#f31282"/>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding:16,
        backgroundColor:'#311b6b'
    },
    image:{
        width:100,
        height:100,
        margin:20
    },
    TextInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor:'#e4d0ff',
        color:'#120438',
        borderRadius:6,
        width: '100%',
        marginRight: 8,
        padding: 16
    },
    buttonContainer: {
        marginTop:16,
        flexDirection: 'row'
    },
    button:{
        width:'40%',
        marginHorizontal:8
    }
});