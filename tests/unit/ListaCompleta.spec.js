import { createLocalVue, shallowMount } from '@vue/test-utils';
import ListaCompleta from "@/views/ListaCompleta.vue";

describe("Testing ListaCompletaVue Component", () => {

    it("Esta exibindo o nome da página?", () => {
        const wrapper = shallowMount(ListaCompleta, {
            props: {
                page_title: "Lista Completa"
            }
        })
    })
    it('Está carregando a lista?', () => {
      const wrapper = shallowMount(ListaCompleta, {
        mocks: {
          $apollo: {
            queries: {
              contents: {
                loading: true,
              },
            },
          },
        },
      })
      expect(wrapper.element).toMatchSnapshot();
    })
      
})
