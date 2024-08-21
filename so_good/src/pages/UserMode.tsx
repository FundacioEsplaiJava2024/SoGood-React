import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { TextField } from '@radix-ui/themes';
import { Button } from '@radix-ui/themes/src/index.js';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Slider from '../components/Slider';

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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px;
    `;

    const SearchWrapper = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    `;

    const Search = styled.div`
        max-width: 1150px;
        width: 100%;
    `;

    const Categories = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 20px;
    `;

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
                        <Button key={category} style={{ width: "100px" }}>
                            {category}
                        </Button>
                    ))}
                </Categories>
            </SearchWrapper>
            <Slider/>
            <Slider/>
            <Slider/>
        </>

    )
}
export default UserMode;