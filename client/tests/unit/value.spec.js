/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import ValuesItem from '@/components/ValuesItem.vue';

describe('ValuesItem Component unit tests: ', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(ValuesItem, {
            propsData : {
                value : {
                    title: "Individuals and interactions over processes and tools",
                    is_modify: 0
                }
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    test('renders the value name', () => {
        const valueTitle = "Individuals and interactions over processes and tools"
        const wrapper = mount(ValuesItem, {
            propsData : {
                value : {
                    title: valueTitle,
                    is_modify: 0
                }
            }
        });
        expect(wrapper.html()).toContain(valueTitle);
    });
    
    test('calls del-value when the delete button is clicked', () => {
        const wrapper = mount(ValuesItem, {
            propsData : {
                value : {
                    title: "Working product over comprehensive documentation",
                    is_modify: 0
                }
            }
        });
        const delValuesItem = jest.fn();

        wrapper.setMethods({
            delValuesItem : del-value
        }) ;

        wrapper.find('del-btn').trigger('click');
        
        expect(delValuesItem).toHaveBeenCalled();
    });

    test('calls mark-Modify when the delete button is clicked', () => {
        const wrapper = mount(ValuesItem, {
            propsData : {
                value : {
                    title: "Working product over comprehensive documentation",
                    is_modify: 0
                }
            }
        });
        const updateValuesItem = jest.fn();

        wrapper.setMethods({
            updateValuesItem : mark-modify
        }) ;

        wrapper.find('ValuesItem-markModify').trigger('click');
        
        expect(updateValuesItem).toHaveBeenCalled();
    });
});