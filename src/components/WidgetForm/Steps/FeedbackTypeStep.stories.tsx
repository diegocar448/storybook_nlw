// Meta é o que vai definir como tipagem esse primeiro objeto aqui dentro #linha 6-7
import { Popover } from '@headlessui/react';
import { Meta, StoryObj } from '@storybook/react';
import { FeedbackTypeStep } from './FeedbackTypeStep';

export default {
    title: 'Widget UI/FeedbackTypeStep',
    component: FeedbackTypeStep,
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
} as Meta

export const Default: StoryObj = {
    
}