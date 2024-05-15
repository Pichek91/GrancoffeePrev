
import { FlatList, View, Text } from "react-native";

const DATA = [
    {
        id: '1',
        task: 'Fazer Compras',
        done: false
    },
    {
        id: '2',
        task: 'Ir para o Shopping ',
        done: true
    },
    {
        id: '3',
        task: 'Passear com o Cachorro',
        done: true
    },
    {
        id: '4',
        task: 'Ligar para meu Tio',
        done: false
    },
    {
        id: '5',
        task: 'Ligar para meu Tio',
        done: false
    },
    {
        id: '6',
        task: 'Ligar para meu Tio',
        done: false
    },
    {
        id: '7',
        task: 'Ligar para meu Tio',
        done: false
    },
    {
        id: '8',
        task: 'Ligar para meu Tio',
        done: false
    },
    {
        id: '9',
        task: 'Ligar para meu Tio',
        done: false
    },
    {
        id: '10',
        task: 'Ligar para meu Tio',
        done: false
    },
    {
        id: '11',
        task: 'Ligar para meu Tio',
        done: false
    },
    {
        id: '12',
        task: 'Ligar para meu Tio',
        done: false
    },
    {
        id: '13',
        task: 'Ligar para meu Tio',
        done: false
    },
    {
        id: '14',
        task: 'Ligar para meu Tio',
        done: false
    },
    {
        id: '15',
        task: 'Ligar para meu Tio',
        done: false
    },
]

export const List =()=> {
    return(
        <View style={{flex:1, paddingVertical: 30, paddingLeft: 10, paddingRight: 10}}>
            <FlatList 
                data={DATA} 
                renderItem={({item, index}) => (
                <View
                        style={{
                        width:'100%', 
                        height: 40, 
                        borderWidth: 1,
                        alignContent: 'center',
                        borderColor: item.done ? 'green' : 'red',
                        backgroundColor: '#7e7777',
                        marginVertical: 10,
                        }}
                        >
                        <Text> {item.task} </Text>
                </View>
            )}
            keyExtractor={item => item.id}
            />
        </View>
    );
};