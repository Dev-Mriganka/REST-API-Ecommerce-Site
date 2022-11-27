package com.mini_project.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Objects;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @NotNull(message = "plaease Enter Valid Street ")
    @NotBlank(message = "Please Enter Right Information")
    private String street;

    @NotNull(message = "Plaese Enter Valid City Name")
    @NotBlank(message = "Please Enter Right Information")
    private String city;

    @NotNull(message = "please Enter Valid State")
    @NotBlank(message = "Please Enter Right Information")
    private String state;

     @NotNull( message = "Please Entry Valid Country Name")
     @NotBlank(message = "Please Enter Right Information")
    private String country;

    @NotNull( message = "Please Entry Valid Zip Name")
    @NotBlank(message = "Please Enter Right Information")
    private String zipCode;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Address address = (Address) o;
        return Objects.equals(street, address.street) && Objects.equals(zipCode, address.zipCode);
    }

    @Override
    public int hashCode() {
        return Objects.hash(street, zipCode);
    }

    @Override
    public String toString() {
        return "Address{" +
                "id=" + id +
                ", street='" + street + '\'' +
                ", city='" + city + '\'' +
                ", state='" + state + '\'' +
                ", country='" + country + '\'' +
                ", zipCode='" + zipCode + '\'' +
                '}';
    }
}
