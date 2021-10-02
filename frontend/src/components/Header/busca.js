
import { useCallback, useState } from 'react'
import * as S from './Style'

const Busca = () => {
    const [submenus, setSubmenu] = useState([
        {
            id: 'Comprar',
            active: true,
        },
        {
            id: 'Alugar',
            active: false,
        }
    ])
    const [index, setIndex] = useState(0)

    const toggle = useCallback(({ target }) => {
        setSubmenu(old => {
            const novoAtivo = [...old.map(value => ({ ...value, active: value.id == target.id }))]

            setIndex(novoAtivo.findIndex(i => i.active))

            return novoAtivo
        })
    })

    return (
        <S.Container>
            
            <S.SubMenu {...{ qtd: submenus.length }}>
                {submenus.map(submenu => <S.OptionSubMenu onClick={toggle} {...submenu}>{submenu.id}</S.OptionSubMenu>)}
                <S.Transition index={index} />
            </S.SubMenu>
        </S.Container>
    )
}

export default Busca