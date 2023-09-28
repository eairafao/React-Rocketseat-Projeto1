import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'


interface CommentProps{
  content: string;
  onDeleteComment: (commentToDelete: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {


  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment(){
    onDeleteComment(content)
  }

  function handleLikeComment(){
    setLikeCount((state) =>{
      return state + 1
    })
  }

  return (
    
    <div className={styles.comment}>
      
      <Avatar hasBorder={false} src="https://github.com/caiorodr.png" alt="" />
      <div className={styles.commentBox}>
        
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Caio Rodrigues</strong>
              <time title="11 de maio ás 08:13h" dateTime="2022-05-11">Cerca de uma 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={20}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>

          <button onClick={handleLikeComment}>
            <ThumbsUp size={20}/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>

    </div>
  )
}
