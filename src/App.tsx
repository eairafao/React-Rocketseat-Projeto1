import { Header } from "./components/Header"

import { Sidebar } from "./components/Sidebar"

import './global.css'
import styles from './App.module.css'

import {Post, PostType} from './components/Post'


//author: {, ,  }
// publisedAt: Date
// content: ""


const posts: PostType[] = [
  {
    id: 1,
    author:{
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa'},
      {type: 'paragraph', content: 'Estou fazendo um novo conteudo para NestJS, estamos a todo vapor trabalhando no curso.. em breve chega na plataforma Ignite'},
      {type: 'paragraph', content: 'Mais detalhes entra no meu insta.. flwwwws o/'},
      {type: 'link', content: '@rocketseat'}
        
    ],
    publishedAt: new Date('2023-09-12 15:00:00'),
  },

  {
    id: 2,
    author:{
      avatarUrl: "https://github.com/eairafao.png",
      name: "Rafael Lopes",
      role: "Web developer",
    },
    content: [
      {type: 'paragraph', content: 'Boa tarde galera, estou fazendo um novo curso de ReactJS na plataforma Ignite'},
      {type: 'paragraph', content: 'Muito aprendizado nessa plataforma maravilhosa <3'},
      {type: 'link', content: '@rocketseat'}
        
    ],
    publishedAt: new Date('2023-09-12 15:00:00'),
  },
]

function App() {


  return (
    <>
    <Header/>

    <div className={styles.wrapper}>
      <Sidebar/>

      <main>

        {posts.map(post => {
          return(
          <Post
            key={post.id}
            post={post}
          />) 
        })}

      </main>
    </div>


    </>
  )
}

export default App
