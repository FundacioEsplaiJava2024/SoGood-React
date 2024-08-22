import { Button, Select, TextArea } from '@radix-ui/themes';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import '../styles/form.css';

const AddForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const AddProductSubmit = (formData: any) => {
        console.log("FORM DATA", formData)

        // here call the API to signup/login
    };

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

    const FormWrapper = styled.div`
        width: 100%;
    `

    return (
        <FormWrapper>
            <form autoComplete="off" onSubmit={handleSubmit(AddProductSubmit)}>
                <fieldset className="Fieldset">
                    <label className="Label" htmlFor="text">
                        Título del producto
                    </label>
                    <input
                        className="Input"
                        id="productName"
                        defaultValue=""
                        placeholder='título'
                        type='text'
                        {...register("productName")}
                    />
                </fieldset>
                <fieldset className="Fieldset">
                    <label className="Label" htmlFor="text">
                        Descripción
                    </label>
                    <TextArea
                        className="Input"
                        id="description"
                        defaultValue=""
                        placeholder='descripción'
                        {...register("description")} />
                </fieldset>
                <fieldset className="Fieldset">
                    <label className="Label" htmlFor="email">
                        Categoría
                    </label>
                    <Select.Root defaultValue="Categorías">
                        <Select.Trigger />
                        <Select.Content>
                            <Select.Group>
                                <Select.Label>Categorías</Select.Label>
                                {categories.map((category, index) => (
                                    <Select.Item
                                        value={category}
                                        key={index}
                                    >
                                        {category}
                                    </Select.Item>
                                ))}
                            </Select.Group>
                        </Select.Content>
                    </Select.Root>
                </fieldset>
                <fieldset className="Fieldset">
                    <label className="Label" htmlFor="password">
                        Cantidad
                    </label>
                    <input
                        className="Input"
                        id="quantity"
                        defaultValue="1"
                        type='number'
                        placeholder='Cantidad'
                        {...register("quantity")} />
                </fieldset>
                <fieldset className="Fieldset">
                    <label className="Label" htmlFor="password">
                        Dirección
                    </label>
                    <input
                        className="Input"
                        id="direction"
                        defaultValue=""
                        type='text'
                        placeholder='Dirección'
                        {...register("direction")} />
                </fieldset>
                <fieldset className="Fieldset">
                    <label className="Label" htmlFor="password">
                        Precio
                    </label>
                    <input
                        className="Input"
                        id="price"
                        defaultValue=""
                        type='number'
                        placeholder='Precio'
                        {...register("price")} />
                </fieldset>
                <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
                    <Button type='submit'>Añadir producto</Button>
                </div>
            </form>
        </FormWrapper>
    )
}
export default AddForm;