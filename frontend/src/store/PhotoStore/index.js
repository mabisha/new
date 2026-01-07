import { create } from "zustand";

export const usePhotoStore = create((set) => ({
  photos: [], // array to store photos
  selectedPhoto: null, // the currently selected photo
  setPhoto: (selectedPhoto) => set({ selectedPhoto }),
  removePhoto: (photoId) =>
    set((state) => ({
      photos: state.photos.filter((photo) => photo.id !== photoId),
    })),
  updatePhoto: (updatedPhoto) =>
    set((state) => ({
      photos: state.photos.map((photo) =>
        photo.id === updatedPhoto.id ? updatedPhoto : photo
      ),
    })),
  selectPhoto: (photo) => set({ selectedPhoto: photo }),
  clearSelectedPhoto: () => set({ selectedPhoto: null }),
}));
