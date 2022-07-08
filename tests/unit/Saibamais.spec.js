import { shallowMount } from '@vue/test-utils'
import SaibamaisVue from '@/views/Home.vue'
import Submenu from '@/components/Submenu.vue'

describe('Home.vue', () => {
  it('Carrega a página', () => {
    const wrapper = shallowMount(SaibamaisVue)
  })
  it('Carrega o componente Submenu', () => {
    const wrapper = shallowMount(Submenu)

    expect(wrapper.findComponent(Submenu).exists()).toBe(true)
  })
})