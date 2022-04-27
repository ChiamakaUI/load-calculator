//6:30

class Loader {
  constructor(root, addBtn) {
    this.root = root;
    this.addBtn = addBtn;
    this.addBtn.addEventListener("click", () => {
      this.addLoad(this.root);
    });
    this.root.addEventListener("click", (e) => {
      if (e.target.classList.contains("bi-trash-fill")) {
        e.target.parentElement.parentElement.parentElement.remove();
      }
    });
  }
  static innerHTML() {
    return `
        <tr class="tracker__row">
            <td>
              <input type="text" class="tracker_name"/>
            </td>
            <td>
              <input type="checkbox" class="tracker_on"/>
            </td>
            <td>
              <input type="number" class="tracker_quantity"/>
            </td>
            <td>
              <input type="number" class="tracker_ac_watts" />
            </td>
            <td>
              <input type="number" class="tracker_ac_surge"/>
            </td>
            <td>
              <input type="number" class="tracker_dc_watts" />
            </td>
            <td>
              <input type="number" class="tracker_hours"/>
            </td>
            <td>
              <input type="number" class="tracker_watts" />
            </td>
            <td>
              <button type="button" class="tracker_btn"><i class="bi bi-trash-fill" title="Click here to delete entry"></i></button>
            </td>
          </tr>
        `;
  }

  addLoad(ele) {
    ele.insertAdjacentHTML("beforeend", Loader.innerHTML());
  }
}

export default Loader;
