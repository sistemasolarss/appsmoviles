function evaluarAccesoApp(edad, tienePermisoDocente, esInvitado) {
    if (esInvitado) {
        return false;
    }

    if (edad >= 18 || (edad < 18 && tienePermisoDocente)) {
        return true;
    }

    return false;
}
