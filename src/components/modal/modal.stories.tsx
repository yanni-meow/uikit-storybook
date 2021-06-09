import React, { useState } from 'react';
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import './style.scss';
import { Button } from '../button/button';

import { Modal } from './modal';

const stories = storiesOf("Modal", module);
stories.addDecorator(withKnobs);

// const customHandleOnChange = () => {
//     console.log('checkbox changed')
// }
 // if you want be able to close your modal window current on it, not in a child component, you should props useState of it inside the component

stories.add("default", () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <React.Fragment>
            <Button
                type='submit'
                name='go modal'
                handleOnChange={() => {
                setIsModalOpen(true)
                }}
            />
            {isModalOpen && 
            <Modal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            customStyle={{ justifyContent: 'space-evenly', height: 'max-content', padding: '36px' }}
            customBtnText='close it right now!'
            customBtnStyle={{ marginTop: '24px' }} 
              >
                meow
            </Modal>
            }
                
        </React.Fragment>
    );
});