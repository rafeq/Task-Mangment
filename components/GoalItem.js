import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable 
            android_ripple={{ color: '#210644' }} 
            onPress={props.onDeleleteItem.bind(this, props.id)}
            style={({pressed})=> pressed && styles.perssedItem}
            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    perssedItem:{
        opacity:0.5
    },
    goalText: {
        color: 'white',
        padding: 8
    }
});