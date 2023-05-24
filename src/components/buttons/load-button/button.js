import { LoadButton } from './styles'

export const Button = (props) => {
    return (
        <LoadButton {...props}>{props.children}</LoadButton>
    )
}