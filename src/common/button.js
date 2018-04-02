import React from 'react'
import { Button } from './style/theme'

export const SearchButton = ({label, onClick}) => (
    <Button margin="0px 0px 0px 10px" onClick={onClick}>{label}</Button>
)