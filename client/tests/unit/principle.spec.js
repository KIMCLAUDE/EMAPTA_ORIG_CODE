/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import PrinciplesItem from '@/components/PrinciplesItem.vue';

describe('PrinciplesItem Component unit tests: ', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(PrinciplesItem, {
            propsData : {
                principle : {
                    title: "Individuals and interactions over processes and tools",
                    is_modify: 0
                }
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    test('renders the principle name', () => {
        const principleTitle = "Individuals and interactions over processes and tools"
        const wrapper = mount(PrinciplesItem, {
            propsData : {
                principle : {
                    title: principleTitle,
                    is_modify: 0
                }
            }
        });
        expect(wrapper.html()).toContain(principleTitle);
    });
    
    test('calls del-principle when the delete button is clicked', () => {
        const wrapper = mount(PrinciplesItem, {
            propsData : {
                principle : {
                    title: "Working product over comprehensive documentation",
                    is_modify: 0
                }
            }
        });
        const delPrinciplesItem = jest.fn();

        wrapper.setMethods({
            delPrinciplesItem : del-principle
        }) ;

        wrapper.find('del-btn').trigger('click');
        
        expect(delPrinciplesItem).toHaveBeenCalled();
    });

    test('calls mark-Modify when the delete button is clicked', () => {
        const wrapper = mount(PrinciplesItem, {
            propsData : {
                principle : {
                    title: "Working product over comprehensive documentation",
                    is_modify: 0
                }
            }
        });
        const updatePrinciplesItem = jest.fn();

        wrapper.setMethods({
            updatePrinciplesItem : mark-modify
        }) ;

        wrapper.find('PrinciplesItem-markModify').trigger('click');
        
        expect(updatePrinciplesItem).toHaveBeenCalled();
    });
});