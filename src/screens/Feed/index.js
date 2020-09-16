import React from 'react';
import { SafeAreaView, View, FlatList, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

import options from '../../../assets/options.png';
import like from '../../../assets/like.png';
import comment from '../../../assets/comment.png';
import send from '../../../assets/send.png';
import save from '../../../assets/save.png';

function Feed() {
    const posts = [
        {
            id: '1',
            author: 'paulocaetanomt88',
            picture_url: 'https://media-cache.cinematerial.com/p/500x/m2mo26mj/super-mario-bros-british-movie-cover.jpg?v=1499190735',
            likes: 1282,
            description: 'Saiu o filme do Mario World',
            hashtags: '#Cinema #Mario',
            place: 'Cinema do Shopping'
        },
        {
            id: '2',
            author: 'paulocaetanomt88',
            picture_url: 'https://giantbomb1.cbsistatic.com/uploads/scale_medium/8/82063/2832009-dkc.jpg',
            likes: 1378,
            description: 'Em breve nos cinemas: Donkey Kong Country',
            hashtags: '#Cinema #DonkeyKong',
            place: 'Cinema do Shopping'
        },
        {
            id: '3',
            author: 'paulocaetanomt88',
            picture_url: 'https://jumpersroms.files.wordpress.com/2019/09/1dyad-contra-iii-snes.jpg',
            likes: 2382,
            description: 'Estréia em Outubro: Contra 3 - The Alien Wars',
            hashtags: '#Cinema #Contra3 #Snes',
            place: 'Cinema do Shopping'
        }
    ];

    function renderItem( { item: post }) {
        return (
            <View style={styles.container}>
                
                <View style={styles.postHeader}>
                    <View style={styles.userInfo}>
                        <Text style={styles.author}> {post.author} </Text>
                        <Text style={styles.place}> {post.place} </Text>
                    </View>
                    <View style={styles.postOptions}>
                        <TouchableOpacity>
                            <Image source={options} />
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View>
                    <Image
                        style={styles.picture_url}
                        source={{ uri: post.picture_url }}
                    />
                </View>

                <View style={styles.footer}>
                    <View style={styles.actions}>
                        <View style={styles.leftActions}> 
                            <TouchableOpacity style={styles.action}>
                                <Image source={like} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.action}>
                                <Image source={comment} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.action}>
                                <Image source={send} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rightActions}> 
                            <TouchableOpacity style={styles.action}>
                                <Image source={save} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.likes}>{post.likes} likes</Text>
                        <Text style={styles.description}>{post.description}</Text>
                        <Text style={styles.hashtags}>{post.hashtags}</Text>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <SafeAreaView>
            <FlatList 
                data={posts}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
    },
    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',
        marginBottom: 5
    },
    postOptions: {},
    userInfo: {},
    author: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold'
    },
    place: {
        fontSize: 12,
        color: '#678'
    },
    picture_url: {
        width: '100%',
        height: 400
    },
    footer: {
        paddingHorizontal: 10
    },
    actions: {
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    action:{
        marginRight: 8
    },
    leftActions: {
        flexDirection: 'row'
    },
    likes:{
        fontWeight: 'bold',
        fontSize: 12
    },
    hashtags: {
        color: '#002D5E'
    },
    description: {
        color: '#000',
        lineHeight: 15
    }
})

export default Feed;