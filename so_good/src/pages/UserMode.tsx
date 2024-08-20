import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { TextField } from '@radix-ui/themes';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function UserMode() {

    const categories = [
        "frutas",
        "verduras",
        "legumbres",
        "carnes",
        "pescados",
        "huevos",
        "lacteos",
        "otros"
    ]

    const { profile } = useParams();

    const HeroName = styled.section`

    `;

    const SearchWrapper = styled.div`

    `;

    const Search = styled.div`

    `;

    const Categories = styled.div`

    `;

    const Category = styled.button`

    `

    return (
        <>
            <HeroName>
                <h1>Bienvenidx {profile}</h1>
            </HeroName>
            <SearchWrapper>
                <Search>
                    <TextField.Root variant="soft" placeholder="Buscar...">
                        <TextField.Slot>
                            <MagnifyingGlassIcon height="16" width="16" />
                        </TextField.Slot>
                    </TextField.Root>
                </Search>
                <Categories>
                    {categories.map((category)=>(
                        <Category key={category}>
                            {category}
                        </Category>
                    ))}
                </Categories>
            </SearchWrapper>
        </>

    )
}
export default UserMode;