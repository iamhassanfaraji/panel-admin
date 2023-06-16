const ActionRender = ({type, actions, ...props})=>{

    const Action = actions[type]
    return <Action {...props}/>
}

export default ActionRender