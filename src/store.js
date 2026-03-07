export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      },
    ],
    characters: [],
    planets: [],
    starships: [],
    favorites: {
      characters: [],
      planets: [],
      starships: []
    },
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "add_task":
      const { id, color } = action.payload;

      return {
        ...store,
        todos: store.todos.map((todo) =>
          todo.id === id ? { ...todo, background: color } : todo,
        ),
      };
    case "add_characters":
      return {
        ...store,
        characters: action.payload,
      };
    case "add_planets":
      return {
        ...store,
        planets: action.payload,
      };
    case "add_starships":
      return {
        ...store,
        starships: action.payload,
      };
    case "toggle_favorite":
      const {uid, name, kind} = action.payload
      if (store.favorites[kind].find(element=>element.uid === uid)) {
        const newFavorites = store.favorites[kind].filter(element => element.uid != uid)
        return{
          ...store,
          favorites: {
            ...store.favorites,
            [kind] : newFavorites
          }
        }
        }
        return{
          ...store,
          favorites: {
            ...store.favorites,
            [kind] : [...store.favorites[kind], {name, uid}]
          }
        }

    default:
      throw Error("Unknown action.");
  }
}
