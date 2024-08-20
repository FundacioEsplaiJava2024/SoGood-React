import * as Tabs from '@radix-ui/react-tabs';
import '../styles/form.css';
//import { createUser } from '../api/createUser';

function LogIn() {

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
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="email">
                            Correo electrónico
                        </label>
                        <input className="Input" id="email" defaultValue="" placeholder='email' type='email' />
                    </fieldset>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="password">
                            Contraseña
                        </label>
                        <input className="Input" id="password" defaultValue="" type='password' placeholder='contraseña' />
                    </fieldset>
                    <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
                        <button className="Button green">Iniciar sesión</button>
                    </div>
                </Tabs.Content>
                <Tabs.Content className="TabsContent" value="tab2">
                    <p className="Text">Gestiona tus anuncios y conecta con más clientes.</p>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="email">
                            Correo electrónico
                        </label>
                        <input className="Input" id="email" defaultValue="" placeholder='email' type='email' />
                    </fieldset>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="password">
                            Contraseña
                        </label>
                        <input className="Input" id="password" defaultValue="" type='password' placeholder='contraseña' />
                    </fieldset>
                    <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
                        <button className="Button green">Iniciar sesión</button>
                    </div>
                </Tabs.Content>
            </Tabs.Root>
            <span className='copyright'>© SoGood</span>
        </section>
    )
}
export default LogIn