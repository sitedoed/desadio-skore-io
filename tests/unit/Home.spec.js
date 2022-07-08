import { shallowMount } from '@vue/test-utils'
import HomeVue from '@/views/Home.vue'
import Submenu from '@/components/Submenu.vue'

describe('Home.vue', () => {
  it('Carrega a página e renderiza o seu nome', () => {
    const wrapper = shallowMount(HomeVue)
    expect(wrapper.text()).toMatch("Página Inicial")
  })
  it('Carrega o componente Submenu', () => {
    const wrapper = shallowMount(Submenu)

    expect(wrapper.findComponent(Submenu).exists()).toBe(true)
  })
})