import { mount } from '@vue/test-utils'
import DesafioVue from '@/views/Desafio.vue'


describe('Desafio.vue', () => {
  it('Carrega a página e renderiza o seu nome', () => {
    const wrapper = mount(DesafioVue)
    expect(wrapper.text()).toMatch("Sobre o Desafio")
  })
})