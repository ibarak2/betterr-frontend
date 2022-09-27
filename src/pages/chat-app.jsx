import React, { useState, useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { chatService } from '../services/chat.service'
import {
  socketService,
  SOCKET_EMIT_SEND_MSG,
  SOCKET_EVENT_ADD_MSG,
  //   SOCKET_EMIT_SET_TOPIC,
} from '../services/socket.service'

export function ChatApp({ participents }) {
  const loggedInUser = useSelector((state) => state.userModule.user)
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch()

  const [msg, setMsg] = useState({ txt: '' })
  const [chatRoom, setChatRoom] = useState({
    _id: '',
    msgs: [{ txt: '' }],
  })
  const [chatRooms, setChatRooms] = useState([])
  //   var [topic, setTopic] = useState('')
  //   const [isBotMode, setIsBotMode] = useState(false)
  //   let botTimeout

  useEffect(() => {
    socketService.on('on-sent-msg', (data) => {
      let newMsgs = chatRoom.msgs
      newMsgs.push(data)
      setChatRoom((prevState) => ({ ...prevState, msgs: newMsgs }))
    })
    return () => {
      socketService.off('on-sent-msg')
      //   botTimeout && clearTimeout(botTimeout)
    }
  }, [])

  useEffect(() => {
    loadChats()
  }, [])

  const loadChats = async () => {
    try {
      const chats = await chatService.query(loggedInUser._id)
      console.log('load chats', chats)

      setChatRooms(chats)
    } catch (err) {
      console.log('load chats failed', err)
    }
  }

  //   useEffect(() => {
  //     socketService.emit(SOCKET_EMIT_SET_TOPIC, addTopic)
  //     return () => {
  //         socketService.off(SOCKET_EMIT_SET_TOPIC, addTopic)
  //     }
  //   }, [])

  const addMsg = async (ev) => {
    ev.preventDefault()
    // console.log(chatRoom)

    const newMsg = await chatService.newMsg({
      msg: msg.txt,
      chatRoomId: chatRoom._id,
    })
    // console.log(newMsg)
    
    let newMsgs = chatRoom.msgs
    newMsgs.push(newMsg)
    setChatRoom((prevState) => ({ ...prevState, msgs: newMsgs }))

    setMsg({ txt: '' })

    const recieverId = chatRoom.participents.filter(
      (participent) => participent !== loggedInUser._id
    )
    const miniTxt = { userId: recieverId[0], newMsg }
    socketService.emit(SOCKET_EMIT_SEND_MSG, miniTxt)
  }

  const handleFormChange = (ev) => {
    const { name, value } = ev.target
    setMsg((prevMsg) => ({ ...prevMsg, [name]: value }))
  }

  const onSetChatRoom = async (chatId) => {
    console.log('chatId', chatId)

    const newChatRoom = chatRooms.filter((chat) => chatId === chat._id)
    setChatRoom(newChatRoom[0])
    // const chatRoom = await chatService.getChatById(chatId)
    // console.log(chatRoom);
  }

  return (
    // <section className="chat-app">
    //   <h2>Lets Chat about {topic}</h2>

    //   <label>
    //     <input
    //       type="checkbox"
    //       name="isBotMode"
    //       checked={isBotMode}
    //       onChange={({ target }) => setIsBotMode(target.checked)}
    //     />
    //     Bot Mode
    //   </label>

    //   <div>
    //     <label>
    //       <input
    //         type="radio"
    //         name="topic"
    //         value="Love"
    //         checked={topic === 'Love'}
    //         onChange={({ target }) => setTopic(target.value)}
    //       />
    //       Love
    //     </label>

    //     <label>
    //
    //       Politics
    //     </label>
    //   </div>

    // </section>

    <section className="main-container chat-app">
      <div className="flex chat-wrapper">
        <div className=" flex chat-left-colmn">
          <div className="chat-filter">
            <select name="filter-convo">
              <option value="all">All</option>
              <option value="unread">Unread</option>
              <option value="starred">Starred</option>
            </select>
            <button className="btn btn-chat-filter">🔬</button>
          </div>

          <ul className="clean-list chat-contacts-list">
            {chatRooms.map((chat, idx) => {
              return (
                <li key={idx} onClick={() => onSetChatRoom(chat._id)}>
                  {chat._id}
                </li>
              )
            })}
          </ul>
        </div>

        <div className="flex chat-right-column">
          <div className="chat-right-header">
            <h2>Username</h2>
          </div>
          <div className="chat-current-room">
            <ul className="clean-list chat-msgs-list">
              {chatRoom.msgs &&
                chatRoom.msgs.map((txt, idx) => <li key={idx}>{txt.fullname}: {txt.msg}</li>)}
            </ul>

            <form onSubmit={addMsg} className="flex chat-form">
              <input
                type="text"
                value={msg.txt}
                onChange={handleFormChange}
                name="txt"
                autoComplete="off"
                placeholder="Type a message"
              />
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     loggedInUser: state.userModule.user,
//   }
// }
// const mapDispatchToProps = {}

// export const ChatApp = connect(mapStateToProps, mapDispatchToProps)(_ChatApp)
