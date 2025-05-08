export const useAdviseStore = defineStore("AdviseStore", () => {
  const isShowAdviseDialog = ref(false);

  return {
    isShowAdviseDialog,
  };
});
