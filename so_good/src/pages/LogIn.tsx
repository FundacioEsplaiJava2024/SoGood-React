import * as Tabs from '@radix-ui/react-tabs';
import { Button } from '@radix-ui/themes/src/index.js';
import { useForm } from "react-hook-form";
import '../styles/form.css';
//import { createUser } from '../api/createUser';

function LogIn() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const loginSubmit = (formData: any) => {
        console.log("FORM DATA", formData)

        // here call the API to signup/login
       
    };

    return (
        <section className="tabWrapper">
            <Tabs.Root className="TabsRoot" defaultValue="tab1">
                <Tabs.List className="TabsList" aria-label="Manage your account">
                    <Tabs.Trigger className="TabsTrigger" value="tab1">
                        Regístrate
                    </Tabs.Trigger>
                    <Tabs.Trigger className="TabsTrigger" value="tab2">
                        Inicia Sesión
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content className="TabsContent" value="tab1">
                    <p className="Text">Explora nuestro menú y haz tu pedido.</p>
                    <form autoComplete="off" onSubmit={handleSubmit(loginSubmit)}>
                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="text">
                                Nombre
                            </label>
                            <input 
                            className="Input"
                            id="name" 
                            defaultValue="" 
                            placeholder='name' 
                            type='text' 
                            {...register("name")}
                            />
                        </fieldset>
                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="text">
                                Nombre de usuario
                            </label>
                            <input 
                            className="Input" 
                            id="username" 
                            defaultValue="" 
                            placeholder='username' 
                            type='text' 
                            {...register("username")}/>
                        </fieldset>
                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="email">
                                Correo electrónico
                            </label>
                            <input 
                            className="Input" 
                            id="email" defaultValue="" 
                            placeholder='email' 
                            type='email' 
                            {...register("email")}/>
                        </fieldset>
                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="password">
                                Contraseña
                            </label>
                            <input 
                            className="Input" 
                            id="password" 
                            defaultValue="" 
                            type='password' 
                            placeholder='contraseña' 
                            {...register("password")}/>
                        </fieldset>
                        <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
                            <Button type='submit'>Iniciar sesión</Button>
                        </div>
                    </form>
                </Tabs.Content>
                <Tabs.Content className="TabsContent" value="tab2">
                    <p className="Text">Gestiona tus anuncios y conecta con más clientes.</p>
                    <form autoComplete="off" onSubmit={handleSubmit(loginSubmit)}>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="email">
                            Correo electrónico
                        </label>
                        <input 
                        className="Input" 
                        id="email" 
                        defaultValue="" 
                        placeholder='email' 
                        type='email' 
                        {...register("email")}
                        />
                    </fieldset>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="password">
                            Contraseña
                        </label>
                        <input 
                        className="Input" 
                        id="password" 
                        defaultValue="" 
                        type='password' 
                        placeholder='contraseña' 
                        {...register("password")}
                        />
                    </fieldset>
                    <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
                        <Button type='submit'>Iniciar sesión</Button>
                    </div>
                    </form>
                </Tabs.Content>
            </Tabs.Root>
            <span className='copyright'>© SoGood</span>
        </section>
    )
}
export default LogIn