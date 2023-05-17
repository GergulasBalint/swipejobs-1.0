package com.radnoti.swipejobs.shared.dto;

import org.springframework.stereotype.Component;

import java.security.SecureRandom;
import java.util.Random;

@Component
public class Utils {
    private final Random RANDOM = new SecureRandom();
    private final String ALHABET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyz";

    public String generateUserId(int length){
        return generateRandomString(length);
    }
    private String generateRandomString(int length){
       StringBuilder returnValue=new StringBuilder(length);

        for (int i = 0; i < length; i++) {
            returnValue.append(ALHABET.charAt(RANDOM.nextInt(ALHABET.length())));

        }
        return new String(returnValue);
    }
}
