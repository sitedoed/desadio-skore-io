import { mount } from "@vue/test-utils";
import Message from "@/components/Message.vue"

describe("Message", () => {
    it("renders props.msg when passed", () => {
        const wrapper = mount(Message, {
            props: {
                msg: "Hello Friends"
            }
        })
    })
})