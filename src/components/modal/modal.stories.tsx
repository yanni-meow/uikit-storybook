import React, { useState } from 'react';
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import './style.scss';
import { Button } from '../button/button';

import { Modal } from './modal';

storiesOf("Modal", module)
    .addDecorator(withKnobs)
    .add("default", () => {
        const [isModalOpen, setIsModalOpen] = useState(false)

        return (
            <div className='story'>
                <Button
                    type='submit'
                    name='go modal'
                    customStyle={{ margin: '0 auto' }}
                    handleOnChange={() => {
                        setIsModalOpen(true)
                    }}
                />
                {isModalOpen && 
                <Modal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                customStyle={{ justifyContent: 'space-evenly', height: 'max-content', padding: '20px' }}
                customBtnText='close it right now!'
                customBtnStyle={{ marginTop: '24px' }} 
                >
                    <div className='story'>
                        <h1>Here is <h2>modal window</h2></h1>
                        <h3>It has ModalProps:</h3>
                        <p>
                            <span>Required is</span> <br />
                            children: React.ReactFragment <br />
                            <span>Optional are</span> <br />
                            customStyle?: object with jsx styles <br />
                            customBtnText?: string with close btn' text <br />
                            customBtnStyle?: object with jsx styles for close btn<br />
                            <p className='story__info'>
                                if you want be able to close your modal window current on it, not in a child component, you should props useState of it inside the component <br />
                                <span>const [isModalOpen, setIsModalOpen] = useState(false) </span>
                            </p>
                            isModalOpen?: boolean <br />
                            setIsModalOpen?: setState foo <br />
                        </p> 
                    </div>
                </Modal>
                }
                    
            </div>
        );
    });