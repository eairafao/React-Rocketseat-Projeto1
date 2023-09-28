import {PencilLine} from 'phosphor-react'

import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>

      <img 
      className={styles.cover}
      src="https://images.unsplash.com/photo-1627627256672-027a4613d028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" alt="" />

      <div className={styles.profile}>
        <Avatar hasBorder={true} src={"https://avatars.githubusercontent.com/u/63694647?v=4"}/>
        <strong>Rafael Lopes</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#"> <PencilLine size={20}/> Editar seu perfil</a>
      </footer>

    </aside>
  )
}
