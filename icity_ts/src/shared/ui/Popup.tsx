import React from 'react'


interface PopupProps {
  isActive: boolean,
  setActive: React.SetStateAction<boolean>,
  children: React.ReactNode,
}

interface item {

}

interface list {
  list: item[]
}

const AuthPopup: React.FC<PopupProps> = ({ isActive, setActive, children }) => {
  return (
    <></>
  )
}


export default AuthPopup
