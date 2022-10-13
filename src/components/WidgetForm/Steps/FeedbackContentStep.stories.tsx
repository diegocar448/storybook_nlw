// Meta é o que vai definir como tipagem esse primeiro objeto aqui dentro #linha 6-7
import { Popover } from '@headlessui/react';
import { Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw';
import { feedbackTypes } from '..';
import { FeedbackContentStep, FeedbackContentStepProps } from './FeedbackContentStep';

export default {
    title: 'Widget UI/FeedbackContentStep',
    component: FeedbackContentStep,
    args:{
        feedbackType: 'BUG',
    },
    parameters:{
        msw: {
            handlers: [
                rest.post('/feedbacks', (req, res, ctx) =>{
                    return res();
                })
            ],
        }
    },
    //argTypes com os argumentos serão modificados ou não
    argTypes:{
        feedbackType:{
            options:Object.keys(feedbackTypes),
            control:{
                type: 'inline-radio'
            }
            
        }
    },
    //decorators é usado quando necessitamos de um provider de component pai para funcionar o component filho
    decorators: [
        (Story) =>  {
            return (
                <Popover>
                    {/* usamos o static para deixar o nosso popover aberto por padrão */}
                    <Popover.Panel static>
                        <div className='bg-zinc-900 relative p-4 rounded-lg flex flex-col items-center w-96'>
                            {Story()}
                        </div>
                    </Popover.Panel>                    
                </Popover>
            )
        }
    ],
} as Meta<FeedbackContentStepProps>

export const Bug: StoryObj<FeedbackContentStepProps> = {
    args:{
        feedbackType:'BUG',
    }
}
export const Idea: StoryObj<FeedbackContentStepProps> = {
    args:{
        feedbackType:'IDEA',
    }
}
export const Other: StoryObj<FeedbackContentStepProps> = {
    args:{
        feedbackType:'OTHER',
    }
}