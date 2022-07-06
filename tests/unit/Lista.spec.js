import { mount } from "@vue/test-utils";
import ListaVue from "@/components/Lista.vue";

describe("Testing Lista Component", () => {
    it("renders props.msg when passed", () => {
        const wrapper = mount(ListaVue, {
            props: {
                page: "Lista de conteúdos"
            }
        })
    })
})
