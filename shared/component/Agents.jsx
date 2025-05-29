import React from 'react'
import HomePageItem from './HomePageItem';

const Agents = () => {
    const agents = [
      { id: "a1", name: "John Doe", phone: "123-456-7890" },
      { id: "a2", name: "Sarah Smith", phone: "987-654-3210" },
    ];
    return (
      <>
        <FlatList
          data={house}
          renderItem={({ item }) => <HomePageItem mattch={item} />}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20, marginTop: 20 }}
        />
        {/* <HomePageItem /> */}
      </>
    );
}

export default Agents