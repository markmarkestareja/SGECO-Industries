<?php
function asset($path) {
    $fullPath = $_SERVER['DOCUMENT_ROOT'] . '/SGECO-Industries' . ltrim($path, '/');

    if (file_exists($fullPath)){
        return $path . '?v=' . filemtime($fullPath);
    }

    return $path;
}


